// Archivo: backend_core/src/controller/touristic/touristic.controller.ts
import { Request, Response } from 'express';
import * as touristicService from '../../services/touristic/touristic.service';

const getAll = async (req: Request, res: Response) => {
  try {
    const places = await touristicService.getAllTouristicPlaces();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los lugares turísticos.' });
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const place = await touristicService.getTouristicPlaceById(id);
    if (place) {
      res.status(200).json(place);
    } else {
      res.status(404).json({ error: 'Lugar turístico no encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el lugar turístico.' });
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const newPlace = await touristicService.createTouristicPlace(req.body);
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el lugar turístico.' });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updatedPlace = await touristicService.updateTouristicPlace(id, req.body);
    res.status(200).json(updatedPlace);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el lugar turístico.' });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await touristicService.deleteTouristicPlace(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el lugar turístico.' });
  }
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
};
