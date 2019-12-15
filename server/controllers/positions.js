let positions = [{
    positionName: "Tree Pose",
    sanskritName: "",
    sanskritMeaning: "",
    difficulty: "Beginner",
    duration: 30,
    imageUrl: "",
    id: 1
}]
let id = 2
module.exports = {
    create: (req,res) => {
        let { positionName, sanskritName, sanskritMeaning, difficulty, duration, imageUrl } = req.body.positionName
        let newPosition = {
            positionName,
            sanskritName,
            sanskritMeaning,
            difficulty,
            duration,
            imageUrl,
            id
        }
        positions.push(newPosition)
        id++
        res.status(200).json(positions)
    },
    read: (req,res) => {
        res.status(200).json(positions)
    },
    update: (req,res) => {
        const index = positions.findIndex(element => element.id === +req.params.id)
        if(index===-1) {
            res.status(500).json("Position not found")
        } else {
            let { positionName, sanskritName, sanskritMeaning, difficulty, duration, imageUrl } = req.body.positionName
            let newPosition = {
                positionName,
                sanskritName,
                sanskritMeaning,
                difficulty,
                duration,
                imageUrl,
                id: req.params.id
            }
            positions[index] = newPosition
            res.status(200).json(positions)
        }
    },
    delete: (req,res) => {
        const index = positions.findIndex(element => element.id === +req.params.id)
        if(index===-1) {
            res.status(500).json("Position not found")
        } else {
            positions.splice(index,1)
            res.status(200).json(positions)
        }
    }
}