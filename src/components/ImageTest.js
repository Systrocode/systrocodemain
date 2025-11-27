'use client';

import { testimonials } from '@/data';

const ImageTest = () => {
  const { clients } = testimonials;
  
  console.log('Testing images:', clients.map(client => ({
    name: client.name,
    image: client.image,
    imageType: typeof client.image,
    imageSrc: client.image?.src || 'No src property'
  })));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Image Test</h2>
      {clients.map((client, index) => (
        <div key={index} className="mb-4 p-4 border">
          <h3>{client.name}</h3>
          <p>Image object: {JSON.stringify(client.image)}</p>
          <img 
            src={client.image?.src || client.image} 
            alt={client.name}
            width={60}
            height={60}
            className="rounded-full"
            onError={(e) => console.error('Failed to load image for', client.name, e)}
            onLoad={() => console.log('Successfully loaded image for', client.name)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageTest;
