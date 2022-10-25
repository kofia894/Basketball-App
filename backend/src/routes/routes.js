import express from "express";

const router = express.Router();

/* Users route */
//Post Method
router.post('/post', addUser)
//Get all Method
router.get('/getAll', getAllUsers)
//Get by ID Method
router.get('/getOne/:id', getUserById)
//Update by ID Method
router.patch('/update/:id', updateUser)
//Delete by ID Method
router.delete('/delete/:id', deleteUser)

/* End of users routes */

/* Players route */
//Post Method
router.post('/post', addUser)
//Get all Method
router.get('/getAll', getAllUsers)
//Get by ID Method
router.get('/getOne/:id', getUserById)
//Update by ID Method
router.patch('/update/:id', updateUser)
//Delete by ID Method
router.delete('/delete/:id', deleteUser)

/* End of players routes */


/* Teams route */
//Post Method
router.post('/post', addUser)
//Get all Method
router.get('/getAll', getAllUsers)
//Get by ID Method
router.get('/getOne/:id', getUserById)
//Update by ID Method
router.patch('/update/:id', updateUser)
//Delete by ID Method
router.delete('/delete/:id', deleteUser)

/* End of teams routes */







export default router;