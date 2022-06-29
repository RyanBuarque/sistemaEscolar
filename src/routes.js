import { Router } from "express";
import {createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa} from "./controler/pessoa.js";

const router = Router();

router.get('/', (req, res)=>{
    // res.json({
    //     "statusCode":200,
    //     "msg":"Api Rodando 2"
    // });
    return res.redirect('index.html');
})

router.post('/pessoa', (req, res)=>{
    let pessoa = req.body;

    let responsePromose = insertPessoa(pessoa)

    responsePromose.then(value => {

        if(value == 200) {
            res.json({
                "statusCode":200
            })
    
            return
        }
    
          res.json({
                "statusCode":404
            })
    })

})

router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
// router.post('/pessoa', insertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);

export default router;