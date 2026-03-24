'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Employee {
    name: string;
    email: string;
}

interface ShiftData {
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    assigneeIndex: number | null;
}

export default function OnboardPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Step 1 — Business info
    const [businessName, setBusinessName] = useState('');
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Step 2 — Password
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Step 3 — Employees
    const [employees, setEmployees] = useState<Employee[]>([
        { name: '', email: '' },
    ]);

    // Step 4 — Shifts
    const [shifts, setShifts] = useState<ShiftData[]>([
        { title: '', date: '', startTime: '08:00', endTime: '16:00', location: '', assigneeIndex: null },
    ]);

    const totalSteps = 4;

    function nextStep() {
        setError('');
        if (step === 1) {
            if (!businessName.trim() || !contactName.trim() || !email.trim()) {
                setError('Fyll ut alle obligatoriske felt');
                return;
            }
            if (!email.includes('@')) {
                setError('Ugyldig e-postadresse');
                return;
            }
        }
        if (step === 2) {
            if (password.length < 6) {
                setError('Passordet må være minst 6 tegn');
                return;
            }
            if (password !== confirmPassword) {
                setError('Passordene må være like');
                return;
            }
        }
        setStep((s) => Math.min(s + 1, totalSteps));
    }

    function prevStep() {
        setError('');
        setStep((s) => Math.max(s - 1, 1));
    }

    function addEmployee() {
        setEmployees((prev) => [...prev, { name: '', email: '' }]);
    }

    function removeEmployee(index: number) {
        setEmployees((prev) => prev.filter((_, i) => i !== index));
    }

    function updateEmployee(index: number, field: keyof Employee, value: string) {
        setEmployees((prev) =>
            prev.map((emp, i) => (i === index ? { ...emp, [field]: value } : emp))
        );
    }

    function addShift() {
        setShifts((prev) => [
            ...prev,
            { title: '', date: '', startTime: '08:00', endTime: '16:00', location: '', assigneeIndex: null },
        ]);
    }

    function removeShift(index: number) {
        setShifts((prev) => prev.filter((_, i) => i !== index));
    }

    function updateShift(index: number, field: keyof ShiftData, value: string | number | null) {
        setShifts((prev) =>
            prev.map((s, i) => (i === index ? { ...s, [field]: value } : s))
        );
    }

    async function handleSubmit() {
        setLoading(true);
        setError('');

        try {
            // Filter out empty employees
            const validEmployees = employees.filter((e) => e.name.trim());

            // Build shift payloads with proper datetime
            const shiftPayloads = shifts
                .filter((s) => s.title.trim() && s.date)
                .map((s) => ({
                    title: s.title,
                    startsAt: `${s.date}T${s.startTime}:00`,
                    endsAt: `${s.date}T${s.endTime}:00`,
                    location: s.location,
                    assigneeIndex: s.assigneeIndex,
                }));

            const res = await fetch('/api/onboard', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    businessName,
                    contactName,
                    email,
                    phone,
                    password,
                    employees: validEmployees,
                    shifts: shiftPayloads,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || 'Noe gikk galt');
                setLoading(false);
                return;
            }

            // Auto-login with email + password
            const signInResult = await signIn('credentials', {
                name: email,
                password,
                redirect: false,
            });

            if (signInResult?.ok) {
                router.push('/dashboard');
            } else {
                // Account created but auto-login failed — redirect to login
                router.push('/login');
            }
        } catch {
            setError('Noe gikk galt. Prøv igjen.');
            setLoading(false);
        }
    }

    const validEmployees = employees.filter((e) => e.name.trim());

    return (
        <main className="onboard-page">
            <div className="onboard-container">
                {/* Logo */}
                <div className="onboard-logo">
                    <span className="logo-z">
                        Z
                        <span className="logo-underline" />
                    </span>
                    <span className="logo-text">plan</span>
                </div>

                {/* Progress bar */}
                <div className="progress-bar">
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className="progress-step-wrapper">
                            <div className={`progress-circle ${s <= step ? 'active' : ''} ${s < step ? 'done' : ''}`}>
                                {s < step ? '\u2713' : s}
                            </div>
                            {s < 4 && <div className={`progress-line ${s < step ? 'active' : ''}`} />}
                        </div>
                    ))}
                </div>

                <div className="onboard-card">
                    {/* Step 1 — Business info */}
                    {step === 1 && (
                        <div className="step-content">
                            <h2>Om bedriften</h2>
                            <p className="step-desc">Fortell oss litt om butikken din</p>

                            <div className="form-group">
                                <label>Butikknavn *</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="F.eks. Klesbutikken AS"
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Kontaktperson *</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Ditt fulle navn"
                                    value={contactName}
                                    onChange={(e) => setContactName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>E-post *</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="din@epost.no"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Telefon</label>
                                <input
                                    type="tel"
                                    className="form-input"
                                    placeholder="Valgfritt"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 2 — Password */}
                    {step === 2 && (
                        <div className="step-content">
                            <h2>Din konto</h2>
                            <p className="step-desc">Sett opp innlogging for admin-kontoen</p>

                            <div className="form-group">
                                <label>Navn</label>
                                <input type="text" className="form-input readonly" value={contactName} readOnly />
                            </div>

                            <div className="form-group">
                                <label>E-post</label>
                                <input type="email" className="form-input readonly" value={email} readOnly />
                            </div>

                            <div className="form-group">
                                <label>Passord *</label>
                                <input
                                    type="password"
                                    className="form-input"
                                    placeholder="Minst 6 tegn"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Bekreft passord *</label>
                                <input
                                    type="password"
                                    className="form-input"
                                    placeholder="Skriv passordet på nytt"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 3 — Employees */}
                    {step === 3 && (
                        <div className="step-content">
                            <h2>Legg til ansatte</h2>
                            <p className="step-desc">Du kan også gjøre dette senere</p>

                            {employees.map((emp, i) => (
                                <div key={i} className="employee-row">
                                    <div className="employee-fields">
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="Navn"
                                            value={emp.name}
                                            onChange={(e) => updateEmployee(i, 'name', e.target.value)}
                                        />
                                        <input
                                            type="email"
                                            className="form-input"
                                            placeholder="E-post (valgfritt)"
                                            value={emp.email}
                                            onChange={(e) => updateEmployee(i, 'email', e.target.value)}
                                        />
                                    </div>
                                    {employees.length > 1 && (
                                        <button
                                            type="button"
                                            className="btn-remove"
                                            onClick={() => removeEmployee(i)}
                                            aria-label="Fjern ansatt"
                                        >
                                            &times;
                                        </button>
                                    )}
                                </div>
                            ))}

                            <button type="button" className="btn-add" onClick={addEmployee}>
                                + Legg til ansatt
                            </button>
                        </div>
                    )}

                    {/* Step 4 — Shifts */}
                    {step === 4 && (
                        <div className="step-content">
                            <h2>Lag første vaktplan</h2>
                            <p className="step-desc">Opprett en eller to vakter for å komme i gang</p>

                            {shifts.map((shift, i) => (
                                <div key={i} className="shift-card">
                                    <div className="shift-header">
                                        <span className="shift-label">Vakt {i + 1}</span>
                                        {shifts.length > 1 && (
                                            <button
                                                type="button"
                                                className="btn-remove"
                                                onClick={() => removeShift(i)}
                                            >
                                                &times;
                                            </button>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label>Tittel</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="F.eks. Morgenvakt"
                                            value={shift.title}
                                            onChange={(e) => updateShift(i, 'title', e.target.value)}
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Dato</label>
                                            <input
                                                type="date"
                                                className="form-input"
                                                value={shift.date}
                                                onChange={(e) => updateShift(i, 'date', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Sted</label>
                                            <input
                                                type="text"
                                                className="form-input"
                                                placeholder="Valgfritt"
                                                value={shift.location}
                                                onChange={(e) => updateShift(i, 'location', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Fra</label>
                                            <input
                                                type="time"
                                                className="form-input"
                                                value={shift.startTime}
                                                onChange={(e) => updateShift(i, 'startTime', e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Til</label>
                                            <input
                                                type="time"
                                                className="form-input"
                                                value={shift.endTime}
                                                onChange={(e) => updateShift(i, 'endTime', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {validEmployees.length > 0 && (
                                        <div className="form-group">
                                            <label>Tildel til</label>
                                            <select
                                                className="form-input"
                                                value={shift.assigneeIndex ?? ''}
                                                onChange={(e) =>
                                                    updateShift(
                                                        i,
                                                        'assigneeIndex',
                                                        e.target.value === '' ? null : Number(e.target.value)
                                                    )
                                                }
                                            >
                                                <option value="">Ingen</option>
                                                {validEmployees.map((emp, ei) => (
                                                    <option key={ei} value={ei}>
                                                        {emp.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}
                                </div>
                            ))}

                            <button type="button" className="btn-add" onClick={addShift}>
                                + Legg til vakt
                            </button>
                        </div>
                    )}

                    {/* Error */}
                    {error && <div className="error-msg">{error}</div>}

                    {/* Navigation */}
                    <div className="step-nav">
                        {step > 1 && (
                            <button type="button" className="btn-secondary" onClick={prevStep} disabled={loading}>
                                Tilbake
                            </button>
                        )}
                        <div className="nav-spacer" />
                        {step < totalSteps ? (
                            <button type="button" className="btn-primary" onClick={nextStep}>
                                {step === 3 ? (validEmployees.length === 0 ? 'Hopp over' : 'Neste') : 'Neste'}
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn-primary"
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? 'Oppretter...' : 'Fullfør'}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                .onboard-page {
                    min-height: 100vh;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    padding: var(--space-xl) var(--space-lg);
                    background: linear-gradient(135deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%);
                }

                .onboard-container {
                    width: 100%;
                    max-width: 520px;
                }

                /* Logo */
                .onboard-logo {
                    text-align: center;
                    margin-bottom: var(--space-lg);
                    font-size: 2rem;
                    font-weight: 900;
                    font-family: Inter, sans-serif;
                }

                .logo-z {
                    color: var(--color-brand-primary);
                    position: relative;
                    display: inline-block;
                }

                .logo-underline {
                    position: absolute;
                    bottom: 2px;
                    left: 0;
                    width: 100%;
                    height: 8px;
                    background: rgba(245, 200, 66, 0.4);
                    z-index: 0;
                }

                .logo-text {
                    color: var(--color-text-primary);
                }

                /* Progress bar */
                .progress-bar {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: var(--space-xl);
                    gap: 0;
                }

                .progress-step-wrapper {
                    display: flex;
                    align-items: center;
                }

                .progress-circle {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.875rem;
                    font-weight: 600;
                    background: var(--color-bg-card);
                    color: var(--color-text-muted);
                    border: 2px solid var(--color-border);
                    transition: all 0.3s ease;
                    flex-shrink: 0;
                }

                .progress-circle.active {
                    background: var(--color-brand-primary);
                    color: white;
                    border-color: var(--color-brand-primary);
                }

                .progress-circle.done {
                    background: var(--color-brand-primary);
                    color: white;
                    border-color: var(--color-brand-primary);
                }

                .progress-line {
                    width: 48px;
                    height: 3px;
                    background: var(--color-border);
                    transition: background 0.3s ease;
                }

                .progress-line.active {
                    background: var(--color-brand-primary);
                }

                /* Card */
                .onboard-card {
                    background: var(--color-bg-primary);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-xl);
                    padding: var(--space-xl);
                    box-shadow: var(--shadow-md);
                }

                .step-content h2 {
                    font-size: 1.375rem;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    margin: 0 0 var(--space-xs) 0;
                }

                .step-desc {
                    color: var(--color-text-muted);
                    font-size: 0.9rem;
                    margin: 0 0 var(--space-lg) 0;
                }

                /* Form */
                .form-group {
                    margin-bottom: var(--space-md);
                    flex: 1;
                }

                .form-group label {
                    display: block;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--color-text-secondary);
                    margin-bottom: var(--space-xs);
                }

                .form-input {
                    width: 100%;
                    padding: 0.7rem 0.9rem;
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-md);
                    font-size: 0.95rem;
                    background: var(--color-bg-input);
                    color: var(--color-text-primary);
                    transition: border-color 0.2s;
                    box-sizing: border-box;
                }

                .form-input:focus {
                    outline: none;
                    border-color: var(--color-brand-primary);
                    box-shadow: 0 0 0 3px rgba(232, 114, 138, 0.1);
                }

                .form-input.readonly {
                    background: var(--color-bg-secondary);
                    color: var(--color-text-muted);
                }

                .form-row {
                    display: flex;
                    gap: var(--space-md);
                }

                /* Employees */
                .employee-row {
                    display: flex;
                    align-items: flex-start;
                    gap: var(--space-sm);
                    margin-bottom: var(--space-md);
                }

                .employee-fields {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-sm);
                }

                .btn-remove {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 1px solid var(--color-border);
                    background: var(--color-bg-card);
                    color: var(--color-text-muted);
                    font-size: 1.2rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    margin-top: 4px;
                    transition: all 0.2s;
                }

                .btn-remove:hover {
                    background: var(--color-error);
                    color: white;
                    border-color: var(--color-error);
                }

                .btn-add {
                    display: block;
                    width: 100%;
                    padding: 0.6rem;
                    border: 2px dashed var(--color-border);
                    border-radius: var(--radius-md);
                    background: transparent;
                    color: var(--color-brand-primary);
                    font-weight: 600;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .btn-add:hover {
                    border-color: var(--color-brand-primary);
                    background: var(--color-brand-subtle);
                }

                /* Shift cards */
                .shift-card {
                    background: var(--color-bg-secondary);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-lg);
                    padding: var(--space-md);
                    margin-bottom: var(--space-md);
                }

                .shift-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: var(--space-sm);
                }

                .shift-label {
                    font-weight: 700;
                    font-size: 0.9rem;
                    color: var(--color-brand-primary);
                }

                /* Error */
                .error-msg {
                    background: rgba(220, 38, 38, 0.08);
                    color: var(--color-error);
                    padding: 0.7rem 1rem;
                    border-radius: var(--radius-md);
                    font-size: 0.9rem;
                    margin-top: var(--space-md);
                    text-align: center;
                }

                /* Navigation */
                .step-nav {
                    display: flex;
                    align-items: center;
                    margin-top: var(--space-xl);
                    gap: var(--space-md);
                }

                .nav-spacer {
                    flex: 1;
                }

                .btn-primary {
                    padding: 0.7rem 2rem;
                    background: var(--color-brand-primary);
                    color: white;
                    border: none;
                    border-radius: var(--radius-full);
                    font-size: 0.95rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s;
                }

                .btn-primary:hover {
                    background: var(--color-brand-hover);
                }

                .btn-primary:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .btn-secondary {
                    padding: 0.7rem 1.5rem;
                    background: transparent;
                    color: var(--color-text-secondary);
                    border: 1px solid var(--color-border);
                    border-radius: var(--radius-full);
                    font-size: 0.95rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .btn-secondary:hover {
                    background: var(--color-bg-card);
                }

                .btn-secondary:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                select.form-input {
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238a8a8a' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 12px center;
                    padding-right: 2rem;
                }

                @media (max-width: 480px) {
                    .onboard-page {
                        padding: var(--space-md) var(--space-sm);
                    }

                    .onboard-card {
                        padding: var(--space-lg) var(--space-md);
                    }

                    .form-row {
                        flex-direction: column;
                        gap: 0;
                    }

                    .progress-line {
                        width: 32px;
                    }
                }
            `}</style>
        </main>
    );
}
