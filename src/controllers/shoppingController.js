export const createShopping = async (req, res) => {
    try {
        res.status(201).send({ sucess: true, message: 'shopping create' });
    } catch (error) {
        res.status(500).send({ error: true, message: error.message });
    }
}