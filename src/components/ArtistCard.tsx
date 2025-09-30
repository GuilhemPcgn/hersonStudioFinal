import OptimizedImage from '@/components/OptimizedImage';

interface ArtistCardProps {
  name: string;
  image: string;
  index: number;
  src: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ name, image, index, src }) => {
  return (
    <div className="flex-shrink-0 w-48 h-48 relative group">
      <div className="rounded-2xl overflow-hidden h-full p-0.5 bg-gradient-to-br from-blue-500 to-orange-500">
        <div className="relative h-full rounded-2xl overflow-hidden bg-white">
          <OptimizedImage
            src={src}
            alt={`Photo de l'artiste ${name}`}
            width={300}
            height={300}
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
            lazy={true}
            style={name === "Gerson" ? { objectPosition: 'center top' } : {}}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
