import { memo } from "react"

interface HeadeoProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };
} 

function HeaderComponent({ selectedGenre }: HeadeoProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}

export const Header = memo(HeaderComponent);