// 서버 시작
const express = require('express');
    //require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// html 진입
app.use(express.static('public'));

// 확장자(.html) 없이도 접근
app.get('/:page.html', (req, res) => {
  const page = req.params.page;
  if (page === 'index') {
    res.redirect('/');
  } else {
    res.redirect(`/${page}`);
  }
});

// 루트 페이지
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 서버 구동
app.listen(PORT, () => {
  console.log(`✅ http://localhost:${PORT}`);
});
