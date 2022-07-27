const {Router}= require ('express');
const { reverseWords }= require('../controller/reverseWord')

const wordsRouter= Router();

wordsRouter.get('/', reverseWords);

module.exports= wordsRouter;