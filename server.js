import express from 'express';

const app = express();

// تنظیم موتور نمایشی EJS
app.set('view engine', 'ejs');
app.use(express.static('public'))

// درخواست به صفحه اصلی
app.get('/', (req, res) => {
    res.render('homepage');  // رندر کردن فایل hompage.ejs
});

// راه‌اندازی سرور
app.listen(4000, () => {
    console.log(`app running on port http://localhost:4000`);
});
