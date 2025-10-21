// 서버 시작
const express = require('express');
    //require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// html 진입
app.use(express.static('public'));

// 확장자(.html) 제거
app.get('/:page', (req, res, next) => {
  const page = req.params.page;
  const filePath = `${__dirname}/public/${page}.html`;
  res.sendFile(filePath, (err) => {
    if (err) next();
  });
});

// 루트 페이지
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 서버 구동
app.listen(PORT, () => {
  console.log(`✅ http://localhost:${PORT}`);
});
