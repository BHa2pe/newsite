// Initialize Supabase
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-public-anon-key';
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
