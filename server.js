// 서버 시작
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const PUBLIC_DIR = path.join(__dirname, 'public');

// URL 정리
app.get('/:page.html', (req, res, next) => {
  const page = req.params.page;
  if (!/^[\w-]+$/.test(page)) return next(); // 경로 조작 방지
  if (page === 'index') return res.redirect(301, '/');
  return res.redirect(301, `/${page}`);
});
// 파일 찾기
app.use(
  express.static(PUBLIC_DIR, {
    extensions: ['html'],
    index: 'index.html',
  })
);
// index 반환
app.get('/', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});
// ERROR 404
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`✅ http://localhost:${PORT}`);
});
