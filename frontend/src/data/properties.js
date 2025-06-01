import image1 from '../assets/gallery10.jpg';
import image2 from '../assets/gallery11.jpg';
import image3 from '../assets/gallery14.jpg';
import image4 from '../assets/gallery17.jpg';
import image5 from '../assets/gallery18.jpg';
import image6 from '../assets/gallery11.jpg';
import image7 from '../assets/gallery55.jpg';
import image8 from '../assets/gallery66.jpg';
import image9 from '../assets/gallery4.jpg';
import image10 from '../assets/gallery5.jpg';

import authorImage1 from '../assets/profile-blog.jpg';

const longDescription = `
  Welcome to this stunning property located in the heart of your city.
  Designed with modern living in mind, this beautiful residence offers
  spacious interiors, elegant finishes, and state-of-the-art amenities.

  With close proximity to schools, shopping centers, and recreational areas,
  it's the perfect blend of convenience and serenity. Whether you're entertaining
  guests or relaxing with your family, this home provides the ideal setting.

  Experience the true meaning of luxury and comfort in this dream home.

  
  With close proximity to schools, shopping centers, and recreational areas,
  it's the perfect blend of convenience and serenity. Whether you're entertaining
  guests or relaxing with your family, this home provides the ideal setting.

  Experience the true meaning of luxury and comfort in this dream home.
  
  With close proximity to schools, shopping centers, and recreational areas,
  it's the perfect blend of convenience and serenity. Whether you're entertaining
  guests or relaxing with your family, this home provides the ideal setting.

  Experience the true meaning of luxury and comfort in this dream home.
`;

const galleryImages = [image7, image8, image9, image10];

const properties = [
  {
    id: 1,
    image: image1,
    name: 'Modern Villa',
    location: 'California, USA',
    bedrooms: 4,
    bathrooms: 3,
    rooms: '$1.2M',
    sqft: 3500,
    price: '$1.2M',
    description: longDescription,
    gallery: galleryImages,
    authorImage: authorImage1,
    authorname: 'Tom Wilaom'
  },
  {
    id: 2,
    image: image2,
    name: 'City Apartment',
    location: 'New York, USA',
    bedrooms: 2,
    bathrooms: 2,
    rooms: '$850k',
    sqft: 1800,
    price: '$850k',
    description: longDescription,
    gallery: galleryImages,
    authorImage: authorImage1,
    authorname: 'Tom Wilaom'
  },
  {
    id: 3,
    image: image3,
    name: 'Beach House',
    location: 'Miami, USA',
    bedrooms: 3,
    bathrooms: 2,
    rooms: '$2.1M',
    sqft: 2800,
    price: '$2.1M',
    description: longDescription,
    gallery: galleryImages,
    authorImage: authorImage1,
    authorname: 'Tom Wilaom'
  },
  {
    id: 4,
    image: image4,
    name: 'Mountain Cabin',
    location: 'Denver, USA',
    bedrooms: 2,
    bathrooms: 1,
    rooms: '$620k',
    sqft: 1500,
    price: '$620k',
    description: longDescription,
    gallery: galleryImages,
    authorImage: authorImage1,
    authorname: 'Tom Wilaom'
  },
  {
    id: 5,
    image: image5,
    name: 'Suburban Home',
    location: 'Austin, USA',
    bedrooms: 4,
    bathrooms: 3,
    rooms: '$950k',
    sqft: 3200,
    price: '$950k',
    description: longDescription,
    gallery: galleryImages,
    authorImage: authorImage1,
    authorname: 'Tom Wilaom'
  },
  {
    id: 6,
    image: image6,
    name: 'Luxury Condo',
    location: 'Los Angeles, USA',
    bedrooms: 3,
    bathrooms: 2,
    rooms: '$1.8M',
    sqft: 2200,
    price: '$1.8M',
    description: longDescription,
    gallery: galleryImages,
    authorImage: authorImage1,
    authorname: 'Tom Wilaom'
  }
];

export default properties;
