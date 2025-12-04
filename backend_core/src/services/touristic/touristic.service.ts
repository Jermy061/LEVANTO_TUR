// Archivo: backend_core/src/services/touristic/touristic.service.ts
import { prisma } from '../../lib/prisma';
import type { TouristicPlace } from '@prisma/client';

/**
 * Obtiene todos los puntos turísticos.
 */
export const getAllTouristicPlaces = async () => {
  return prisma.touristicPlace.findMany();
};

/**
 * Obtiene un punto turístico por su ID.
 */
export const getTouristicPlaceById = async (id: number) => {
  return prisma.touristicPlace.findUnique({ where: { id } });
};

/**
 * Crea un nuevo punto turístico.
 */
export const createTouristicPlace = async (data: Omit<TouristicPlace, 'id'>) => {
  return prisma.touristicPlace.create({
    data,
  });
};

/**
 * Actualiza un punto turístico existente.
 */
export const updateTouristicPlace = async (id: number, data: Partial<Omit<TouristicPlace, 'id'>>) => {
  return prisma.touristicPlace.update({
    where: { id },
    data,
  });
};

/**
 * Elimina un punto turístico.
 */
export const deleteTouristicPlace = async (id: number) => {
  return prisma.touristicPlace.delete({ where: { id } });
};
