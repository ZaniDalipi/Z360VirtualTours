import { promises as fs } from 'fs';
import path from 'path';
import { Database, Tour, Category, Service, Testimonial, ContactSubmission, Place, User, SiteSettings } from './schema';
import { initialData } from './data';

const DB_PATH = path.join(process.cwd(), 'data', 'db.json');

async function ensureDbExists(): Promise<void> {
  try {
    await fs.access(DB_PATH);
  } catch {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    await fs.writeFile(DB_PATH, JSON.stringify(initialData, null, 2));
  }
}

async function readDb(): Promise<Database> {
  await ensureDbExists();
  const data = await fs.readFile(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

async function writeDb(data: Database): Promise<void> {
  await ensureDbExists();
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Tours
export async function getTours(options?: {
  categoryId?: string;
  featured?: boolean;
  published?: boolean;
  limit?: number;
}): Promise<Tour[]> {
  const db = await readDb();
  let tours = db.tours;

  if (options?.categoryId) {
    tours = tours.filter((t) => t.categoryId === options.categoryId);
  }
  if (options?.featured !== undefined) {
    tours = tours.filter((t) => t.isFeatured === options.featured);
  }
  if (options?.published !== undefined) {
    tours = tours.filter((t) => t.isPublished === options.published);
  }
  if (options?.limit) {
    tours = tours.slice(0, options.limit);
  }

  return tours;
}

export async function getTourById(id: string): Promise<Tour | null> {
  const db = await readDb();
  return db.tours.find((t) => t.id === id) || null;
}

export async function getTourBySlug(slug: string): Promise<Tour | null> {
  const db = await readDb();
  return db.tours.find((t) => t.slug === slug) || null;
}

export async function createTour(data: Omit<Tour, 'id' | 'slug' | 'createdAt' | 'updatedAt' | 'views'>): Promise<Tour> {
  const db = await readDb();
  const tour: Tour = {
    ...data,
    id: generateId(),
    slug: generateSlug(data.title),
    views: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  db.tours.push(tour);
  await writeDb(db);
  return tour;
}

export async function updateTour(id: string, data: Partial<Tour>): Promise<Tour | null> {
  const db = await readDb();
  const index = db.tours.findIndex((t) => t.id === id);
  if (index === -1) return null;

  db.tours[index] = {
    ...db.tours[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  await writeDb(db);
  return db.tours[index];
}

export async function deleteTour(id: string): Promise<boolean> {
  const db = await readDb();
  const index = db.tours.findIndex((t) => t.id === id);
  if (index === -1) return false;

  db.tours.splice(index, 1);
  await writeDb(db);
  return true;
}

export async function incrementTourViews(id: string): Promise<void> {
  const db = await readDb();
  const tour = db.tours.find((t) => t.id === id);
  if (tour) {
    tour.views += 1;
    await writeDb(db);
  }
}

// Categories
export async function getCategories(options?: { active?: boolean }): Promise<Category[]> {
  const db = await readDb();
  let categories = db.categories.sort((a, b) => a.order - b.order);

  if (options?.active !== undefined) {
    categories = categories.filter((c) => c.isActive === options.active);
  }

  return categories;
}

export async function getCategoryById(id: string): Promise<Category | null> {
  const db = await readDb();
  return db.categories.find((c) => c.id === id) || null;
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const db = await readDb();
  return db.categories.find((c) => c.slug === slug) || null;
}

export async function createCategory(data: Omit<Category, 'id' | 'slug' | 'createdAt' | 'updatedAt'>): Promise<Category> {
  const db = await readDb();
  const category: Category = {
    ...data,
    id: generateId(),
    slug: generateSlug(data.name),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  db.categories.push(category);
  await writeDb(db);
  return category;
}

export async function updateCategory(id: string, data: Partial<Category>): Promise<Category | null> {
  const db = await readDb();
  const index = db.categories.findIndex((c) => c.id === id);
  if (index === -1) return null;

  db.categories[index] = {
    ...db.categories[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  await writeDb(db);
  return db.categories[index];
}

export async function deleteCategory(id: string): Promise<boolean> {
  const db = await readDb();
  const index = db.categories.findIndex((c) => c.id === id);
  if (index === -1) return false;

  db.categories.splice(index, 1);
  await writeDb(db);
  return true;
}

// Services
export async function getServices(options?: { active?: boolean }): Promise<Service[]> {
  const db = await readDb();
  let services = db.services.sort((a, b) => a.order - b.order);

  if (options?.active !== undefined) {
    services = services.filter((s) => s.isActive === options.active);
  }

  return services;
}

export async function getServiceById(id: string): Promise<Service | null> {
  const db = await readDb();
  return db.services.find((s) => s.id === id) || null;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const db = await readDb();
  return db.services.find((s) => s.slug === slug) || null;
}

export async function createService(data: Omit<Service, 'id' | 'slug' | 'createdAt' | 'updatedAt'>): Promise<Service> {
  const db = await readDb();
  const service: Service = {
    ...data,
    id: generateId(),
    slug: generateSlug(data.title),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  db.services.push(service);
  await writeDb(db);
  return service;
}

export async function updateService(id: string, data: Partial<Service>): Promise<Service | null> {
  const db = await readDb();
  const index = db.services.findIndex((s) => s.id === id);
  if (index === -1) return null;

  db.services[index] = {
    ...db.services[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  await writeDb(db);
  return db.services[index];
}

// Testimonials
export async function getTestimonials(options?: { active?: boolean; limit?: number }): Promise<Testimonial[]> {
  const db = await readDb();
  let testimonials = db.testimonials;

  if (options?.active !== undefined) {
    testimonials = testimonials.filter((t) => t.isActive === options.active);
  }
  if (options?.limit) {
    testimonials = testimonials.slice(0, options.limit);
  }

  return testimonials;
}

export async function createTestimonial(data: Omit<Testimonial, 'id' | 'createdAt'>): Promise<Testimonial> {
  const db = await readDb();
  const testimonial: Testimonial = {
    ...data,
    id: generateId(),
    createdAt: new Date().toISOString(),
  };
  db.testimonials.push(testimonial);
  await writeDb(db);
  return testimonial;
}

// Contact Submissions
export async function getContactSubmissions(options?: { status?: string }): Promise<ContactSubmission[]> {
  const db = await readDb();
  let submissions = db.contactSubmissions.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (options?.status) {
    submissions = submissions.filter((s) => s.status === options.status);
  }

  return submissions;
}

export async function createContactSubmission(
  data: Omit<ContactSubmission, 'id' | 'status' | 'createdAt'>
): Promise<ContactSubmission> {
  const db = await readDb();
  const submission: ContactSubmission = {
    ...data,
    id: generateId(),
    status: 'new',
    createdAt: new Date().toISOString(),
  };
  db.contactSubmissions.push(submission);
  await writeDb(db);
  return submission;
}

export async function updateContactSubmissionStatus(
  id: string,
  status: ContactSubmission['status']
): Promise<ContactSubmission | null> {
  const db = await readDb();
  const submission = db.contactSubmissions.find((s) => s.id === id);
  if (!submission) return null;

  submission.status = status;
  await writeDb(db);
  return submission;
}

// Places
export async function getPlaces(options?: {
  categoryId?: string;
  type?: Place['type'];
  featured?: boolean;
  verified?: boolean;
  limit?: number;
}): Promise<Place[]> {
  const db = await readDb();
  let places = db.places;

  if (options?.categoryId) {
    places = places.filter((p) => p.categoryId === options.categoryId);
  }
  if (options?.type) {
    places = places.filter((p) => p.type === options.type);
  }
  if (options?.featured !== undefined) {
    places = places.filter((p) => p.isFeatured === options.featured);
  }
  if (options?.verified !== undefined) {
    places = places.filter((p) => p.isVerified === options.verified);
  }
  if (options?.limit) {
    places = places.slice(0, options.limit);
  }

  return places;
}

export async function getPlaceById(id: string): Promise<Place | null> {
  const db = await readDb();
  return db.places.find((p) => p.id === id) || null;
}

export async function getPlaceBySlug(slug: string): Promise<Place | null> {
  const db = await readDb();
  return db.places.find((p) => p.slug === slug) || null;
}

export async function createPlace(data: Omit<Place, 'id' | 'slug' | 'createdAt' | 'updatedAt'>): Promise<Place> {
  const db = await readDb();
  const place: Place = {
    ...data,
    id: generateId(),
    slug: generateSlug(data.name),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  db.places.push(place);
  await writeDb(db);
  return place;
}

// Users
export async function getUserByEmail(email: string): Promise<User | null> {
  const db = await readDb();
  return db.users.find((u) => u.email === email) || null;
}

export async function getUserById(id: string): Promise<User | null> {
  const db = await readDb();
  return db.users.find((u) => u.id === id) || null;
}

export async function createUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
  const db = await readDb();
  const user: User = {
    ...data,
    id: generateId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  db.users.push(user);
  await writeDb(db);
  return user;
}

// Settings
export async function getSettings(): Promise<SiteSettings> {
  const db = await readDb();
  return db.settings;
}

export async function updateSettings(data: Partial<SiteSettings>): Promise<SiteSettings> {
  const db = await readDb();
  db.settings = { ...db.settings, ...data };
  await writeDb(db);
  return db.settings;
}

// Search
export async function searchTours(query: string): Promise<Tour[]> {
  const db = await readDb();
  const lowerQuery = query.toLowerCase();

  return db.tours.filter(
    (t) =>
      t.isPublished &&
      (t.title.toLowerCase().includes(lowerQuery) ||
        t.description.toLowerCase().includes(lowerQuery) ||
        t.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
        t.location.city.toLowerCase().includes(lowerQuery))
  );
}

export async function searchPlaces(query: string): Promise<Place[]> {
  const db = await readDb();
  const lowerQuery = query.toLowerCase();

  return db.places.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.location.city.toLowerCase().includes(lowerQuery)
  );
}

// Stats for admin dashboard
export async function getStats(): Promise<{
  totalTours: number;
  totalViews: number;
  totalContacts: number;
  newContacts: number;
  totalPlaces: number;
}> {
  const db = await readDb();

  return {
    totalTours: db.tours.length,
    totalViews: db.tours.reduce((sum, t) => sum + t.views, 0),
    totalContacts: db.contactSubmissions.length,
    newContacts: db.contactSubmissions.filter((c) => c.status === 'new').length,
    totalPlaces: db.places.length,
  };
}
