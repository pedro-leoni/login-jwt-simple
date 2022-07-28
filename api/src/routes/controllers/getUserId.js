const getUserId = async (req, res) => {
    try {
        res.status(200).json({ userid: req.id})
    } catch(err){
        res.status(404).json({ err })
    }
}

module.exports = getUserId