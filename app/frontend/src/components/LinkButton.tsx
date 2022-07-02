import React from 'react';
import { Link } from 'react-router-dom';

interface ILinkButtonProps {
  to:string;
  page: string;
}

const LinkButton: React.FC<ILinkButtonProps> = ({ to, page }: ILinkButtonProps) => {
  return (
    <Link to={ to }>
      { page }
    </Link>
  );
};

export default LinkButton;
