const { blogModel } = require("../model/blogModel");

const getBlog = async (req,res)=>{
    try {
        const getAllBlog= await blogModel.find();
        res.status(200).send({msg:"Data Fetched Successfully",data:getAllBlog})
   } catch (error) {
    res.status(501).send({msg:error.message})
   }
}

const createBlog = async (req,res)=>{
    const {title, description, img, content} = req.body;

    if(!title || !description || !img || !content){
        res.status(400).json({
            meg : "all field required"
        })
    }

    try{
        const newBlog = await blogModel.create(req.body)
        newBlog.save()

        res.status(200).json({
            success: true,
            newBlog
        })
    }catch(err){
        res.status(400).json({
            success: false,
            mes: err.message
        })
    }

}

const getSingleBlog = async (req,res)=>{
    const blogId = req.params.blogId
    console.log(blogId)
    try {
        const getData = await blogModel.findOne({_id:blogId})
        if(getData) {
            res.status(200).send(getData)
        }else{
            res.status(404).send({mes:"Blog not Found"})
        }
    }catch(err){
        res.status(404).send({mes:err.message})
    }
}

const blogDelete = async (req,res)=>{
    const blogId = req.params.blogId
    console.log(blogId)
    try {
        const getData = await blogModel.deleteOne({_id:blogId})
        const updatedData = await blogModel.find()
        if(getData) {
            res.status(200).send({mes:"blog has been delete",
            updatedData
        })
        }else{
            res.status(404).send({mes:"Blog not Found"})
        }
    }catch(err){
        res.status(404).send({mes:err.message})
    }
}

module.exports = {
    getBlog,
    createBlog,
    getSingleBlog,
    blogDelete
}