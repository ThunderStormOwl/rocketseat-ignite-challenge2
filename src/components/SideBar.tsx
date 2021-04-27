import { useState } from 'react';
import {Button} from './Button'

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres:GenreResponseProps[],
  handleClick:(id:number) => void,
  selectedGenre:Number,
}

export function SideBar(props: SideBarProps) {

  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClick(genre.id)}
            selected={props.selectedGenre === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}