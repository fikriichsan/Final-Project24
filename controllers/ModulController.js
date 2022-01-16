const ModulModel = require("../models/Modul");
const ClassModel = require("../models/Class");

class ModulController {
    static async getModulById(req, res){
        try {
            const id = req.params.id_modul;

            const descModul = await ModulModel.findOne({_id: id}).populate('sub_modul')
            res.status(200).send(descModul);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async addModul (req, res){
        const body = req.body
        const id_class = req.params.id_class;
        const name = body.name;
        const description = body.description;
        
        const newModul = new ModulModel({
            id_class: id_class,
            name: name,
            description: description
        })
        try {
            await newModul.save(async(err, newModul) =>{
                await ClassModel.findByIdAndUpdate({_id: req.params.id_class}, {$addToSet: {modul: newModul._id}}, {new: true});
            });
            res.status(201).send(newModul);
        } catch (error){
            res.status(500).send({err: error});
            console.log(error)
        }
    }
}
    

module.exports = ModulController;