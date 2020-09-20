# Dever Shorten Link Task
Đây là phần backend cho web shorten link.

## API

- Tạo một shorten link mới
> `POST`  [\links]()

```js
// req.body
{
  root: String,
  slug: String || null
}

// res.body
{
  msg: String,
  status: "RED" || "GREEN"
}
/*
  "GREEN" : Đã lưu thành công
  "RED"   : Chưa tạo được shorten link
*/
```

- Lấy list shorten link
> // lấy 10 shorten link mới nhất <br /> `GET`  [/link?size=10]() 
```js
// res.body
[
  {
    "_id": "5f6707be6a1f3d00ab8ed571",
    "root": "https://shorten-link.vercel.app/?fbclid=IwAR071nHz07-yDmQ1ljfVAPx5ljPPuuu9en-6NN6fsqTRISL1XHxXuV6Ts4k",
    "slug": "a",
    "cntClick": 0,
    "date": "2020-09-20T07:41:50.490Z",
    "__v": 0
  },
  ...
]
```
Nếu không có query size thì sẽ lấy trả về tất cả những shorten link có trong database

- Lấy 1 shorten link theo slug
> `GET`  [/links/:slug]()
```js
// res.body

{
  "msg": "Đã tìm thấy trên database",
  "status": "GREEN",
  "link": {
    "_id": "5f6670a534aace26185cb934",
    "root": "dever.com",
    "slug": "dever",
    "cntClick": 6,
    "date": "2020-09-19T20:57:09.661Z",
    "__v": 0
  }
}

hoặc 

{
  "msg": "Không tồn tại slug này trên database",
  "status": "RED"
}
```
