const ClassModel = require("../models/Class");

class ClassController {
    static async getAllClass(req, res){
        try {
            const ClassList = await ClassModel.find()
            res.status(200).send(ClassList)
        }
        catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getClassById(req, res){
        try {
            const id = req.params.id_class;

            const descClass = await ClassModel.findOne({_id: id}).populate('modul')
            res.status(200).send(descClass);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async addClass (req, res){
        const body = req.body;
        const name = body.name;
        const description = body.description;
        const card_image = body.card_image;
       
        const newClass = new ClassModel({
            name: name,
            description: description,                
            card_image: card_image
        });
        const check = await ClassModel.findOne({ name });
        if (check){
            return res.status(403).json({
                error: {
                    message: "Class Already Exist"
                }
            })
        }
        try {
            const saved = await newClass.save();
            res.status(201).send(saved);
        }catch(error){
            res.status(500).send({err: error})
        }
    }
    static async updateClass(req, res){
        try{
            const body = req.body;
            const id = req.params.id_class;
            const name = body.name;
            const description = body.description;
            const card_image = body.card_image;
            await ClassModel.updateOne({_id: id}, {
                name: name,
                description: description,
                card_image: card_image
            })
            res.status(200).send({message: "success"})
        } catch (error) {
            res.status(500).send({ err: error })
            console.log(error)
        }
    }

    static async deleteClass(req, res){
        try{
            const id = req.params.id_class;
            await ClassModel.deleteOne({_id: id})
            res.status(200).send({ message: `${id} has been deleted`})
        } catch (error){
            res.status(500).send({err: error})
        }
    }
};

module.exports = ClassController;