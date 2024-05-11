const Sample=require('../models/simple');


const InputSample= async (req, res) => {
    const{name,price}=req.body;
    try{
    const p=await Sample.create({
        name,price
    });
    res.status(201).json(p);
} catch (error) {
  console.error('Error creating: ', error);
  res.status(500).json({ error: 'Internal server error' });
}
};


const GetSample= async (req, res) => {
 
    try {
        const p = await Sample.findAll();
        if (!p) {
            return res.status(404).json({ error: ' not found' });
        }
        res.json(p);
    } catch (error) {
        console.error('Error finding:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};






module.exports = { GetSample, InputSample};
