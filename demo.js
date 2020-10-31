const base64 = require('js-base64')

function generateShareUrl(category, data, conversationId) {
  const encode = encodeURIComponent(base64.encode(data))
  var query = ''
  if (conversationId) {
    query = `&conversation=${conversationId}`
  }
  return `mixin://send?category=${category}${query}&data=${encode}`
}

const str = '{"action":"http://192.168.31.156:3000/circles/9415878/posts/82","app_id":"c1412f68-6152-40ad-a193-f7fadf9328a1","description":"来自debugCircle","icon_url":"https://mixin-images.zeromesh.net/rl_7ufE4eezlZDDjsGz9apzvoa7ULeZLlyixbN04iiaGFng8JL9UtQVZwzHw4Bsh2_7m5WHVPwtWkLKOydGZ4Q=s256","title":"抽奖测试"}'
console.log(generateShareUrl('app_card', str))
console.log('\n')
console.log(generateShareUrl('contact', '{"user_id":"773e5e77-4107-45c2-b648-8fc722ed77f5"}'))
console.log('\n')
console.log(generateShareUrl('image', '{"url":"https://t8.baidu.com/it/u\u003d1484500186,1503043093\u0026fm\u003d79\u0026app\u003d86\u0026size\u003dh300\u0026n\u003d0\u0026g\u003d4n\u0026f\u003djpeg?sec\u003d1600843810\u0026t\u003d521b3372481197b5f9d4bb750615ffaf"}'))
console.log('\n')
console.log(generateShareUrl('text', "test"))
console.log('\n')
console.log(generateShareUrl('live', '{"height":720,"thumb_url":"https://anchorpost.msstatic.com/cdnimage/anchorpost/1056/41/9771cb5a13901e0ed97514a9cf98e8_1663_1566469032.jpg?imageview/4/0/blur/1/format/webp","url":"https://1400293698.vod2.myqcloud.com/fd69ed6cvodcq1400293698/c1dde9e95285890807215641562/MramAAZccMIA.mp4","width":1280}'))
console.log('\n')
console.log(generateShareUrl('post', `# Mixin Post\n-------------------\n## Markdown简介\n> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的HTML页面。\n—— [维基百科](https://zh.wikipedia.org/wiki/Markdown)\n正如您在阅读的这份文档，它使用简单的符号标识不同的标题，将某些文字标记为**粗体**或者*斜体*，创建一个[链接](http://www.example.com)或一个脚注[^demo]。下面列举了几个高级功能，更多语法请按\`Ctrl + /\`查看帮助。`))