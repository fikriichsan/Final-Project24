const { send } = require("express/lib/response");
const ModulModel = require("../models/Modul");
const subModulModel = require("../models/SubModul");

class ModulController {
    static async getSubModulById(req, res){
        try {
            const id = req.params.id_sub_modul;

            const descSubModul = await subModulModel.findOne({_id: id})
            res.status(200).send(descSUbModul);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async addSubModul (req, res){
        const body = req.body;
        const id_modul = req.params.id_modul;
        const name = body.name;
        const materi = body.materi;
        
        const newSubModul = new subModulModel({
            id_modul: id_modul,
            name: name,
            materi: materi
        })
        try {
            await newSubModul.save(async(err, newSubModul) =>{
                await ModulModel.findByIdAndUpdate({_id: req.params.id_modul}, {$addToSet: {sub_modul: newSubModul._id}}, {new: true});
            });
            res.status(201).send(newSubModul);
        } catch (error){
            res.status(500).send({err: error});
            console.log(error)
        }
    }

    static async updateSubModul(req, res){
        const id = req.params.id_sub_modul;
        const body = req.body;
        const name = body.name;
        const materi = body.materi;

        try{
            await subModulModel.updateOne({ _id: id}, 
                {name: name, materi: materi} )
            res.status(200).send(subModulModel);
        } catch (error) {
            res.status(500).send()
        }
    }

    static async deleteSubModul(req, res) {
        try{
            const id = req.params.id_sub_modul;
            await subModulModel.deleteOne({_id: id})
            res.status(200).send({message: `${id} has been deleted`})
        } catch (error){
            res.status(500).send({err: error})
        }
    }
}
    

module.exports = ModulController;