const shortid = require('shortid');
const Link = require('../models/Link')


async function createLink(req, res){    
    let {root, slug} = req.body
    const slugExist = await Link.findOne({slug})
    const rootExist = await Link.findOne({root})

    if (slug && slugExist){
        return res.json({
            msg: "Đã tồn tại đường dẫn này",
            status: "RED"
        })
    }

    if (!slug && rootExist) {
        return res.json({
            msg: "Đã lưu thành công.",
            status: "GREEN",
            link: rootExist
        })
    }

    if (!slug) slug = shortid.generate()
    const link = new Link({root, slug, cntClick: 0});
    try {
        const newLink = await link.save()
        res.json({
            msg: "Đã lưu thành công",
            status: "GREEN",
            link: newLink
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: "Lỗi không xác định",
            status: "RED"
        })
    }

}

async function getBySlug(req, res){
    let {slug} = req.params
    const slugExist = await Link.findOne({slug})
    if (slugExist) {
        slugExist.cntClick = +slugExist.cntClick + 1;
        const updated = await slugExist.save()
        return res.json({
            msg: "Đã tìm thấy trên database",
            status: "GREEN",
            link: updated
        })
    } else {
        return res.json({
            msg: "Không tồn tại slug này trên database",
            status: "RED"
        })
    }
}

async function getMany(req, res){    
    const {size} = req.query
    const modelSize = await Link.countDocuments()     
    const ls = await Link.find().sort({date: -1}).limit(size ? +size : modelSize)
    res.json(ls)
}

module.exports = {
    getMany,
    getBySlug,
    createLink
}