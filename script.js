// Initialize Supabase
const supabaseUrl = 'https://emfjdirzyaffqsssmmyt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZmpkaXJ6eWFmZnFzc3NtbXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzNTE0MTUsImV4cCI6MjA0ODkyNzQxNX0.8BbHKcE22eFoOvj721CDiGZuj0WkCS3At7ku1fZ29S4';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Handle registration
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        alert('Ошибка регистрации: ' + error.message);
    } else {
        alert('Регистрация успешна! Подтвердите ваш email.');
    }
});

// Handle login
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert('Ошибка входа: ' + error.message);
    } else {
        alert('Добро пожаловать, ' + user.email);
    }
});
