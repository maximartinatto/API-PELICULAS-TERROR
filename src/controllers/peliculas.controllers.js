import { pool } from "../db.js";

export const getPeliculas = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM pelicula");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: "Somethin goes wrong",
        });
    }
};

export const getPelicula = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM pelicula WHERE id = ?", [
            req.params.id,
        ]);
        if (rows.length <= 0)
            return res.status(404).json({
                message: "Pelicula not found",
            });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Somethin goes wrong",
        });
    }
};
export const createPeliculas = async (req, res) => {
    const {
        name,
        genero,
        director,
        protagonista,
        fecha_estreno,
        duracion,
        recaudacion,
    } = req.body;
    try {
        const [rows] = await pool.query(
            "INSERT INTO pelicula (name, genero, director, protagonista, fecha_estreno, duracion, recaudacion) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [
                name,
                genero,
                director,
                protagonista,
                fecha_estreno,
                duracion,
                recaudacion,
            ]
        );
        res.send({
            id: rows.insertId,
            name,
            genero,
            director,
            protagonista,
            fecha_estreno,
            duracion,
            recaudacion,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Somethin goes wrong",
        });
    }
};
export const deletePeliculas = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM pelicula WHERE id = ?", [
            req.params.id,
        ]);
        if (result.affectedRows <= 0)
            return res.status(404).json({
                message: "Pelicula not found",
            });
        res.sendStatus(204);
    } catch {
        return res.status(500).json({
            message: "Somethin goes wrong",
        });
    }
};
export const updatePeliculas = async (req, res) => {
    const { id } = req.params;
    const {
        name,
        genero,
        director,
        protagonista,
        fecha_estreno,
        duracion,
        recaudacion,
    } = req.body;
    try {
        const [result] = await pool.query(
            "UPDATE pelicula SET name = IFNULL(?, name ), genero = IFNULL(?, genero), director = IFNULL(?, director), protagonista = IFNULL(?, protagonista), fecha_estreno = IFNULL(?, fecha_estreno), duracion = IFNULL(?, duracion), recaudacion = IFNULL(?, recaudacion) WHERE id = ?",
            [
                name,
                genero,
                director,
                protagonista,
                fecha_estreno,
                duracion,
                recaudacion,
                id,
            ]
        );

        if (result.affectedRows === 0)
            return res.status(404).json({
                message: "Pelicula not found",
            });
        const [rows] = await pool.query("SELECT * FROM pelicula WHERE id = ?", [
            id,
        ]);

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Somethin goes wrong",
        });
    }
};
