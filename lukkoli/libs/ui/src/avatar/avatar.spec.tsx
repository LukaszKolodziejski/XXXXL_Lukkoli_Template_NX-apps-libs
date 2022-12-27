import { render, screen } from '@testing-library/react';

import { Avatar } from './avatar';
import { AvatarProps } from './models';

describe('<Avatar>', () => {
  const LETTER = 'A';

  const PROPS: AvatarProps = {
    src: 'https://media.licdn.com/dms/image/C4E03AQHRo8YgyxIqTA/profile-displayphoto-shrink_200_200/0/1634070623836?e=1677715200&v=beta&t=pvm36LTHlghhCQbu4ZtnSJ4iiiLAZ_IZUNNpnM9LG3I',
    text: 'Example text...',
  };

  it('assigns alt attribute', () => {
    render(<Avatar {...PROPS} />);
    screen.getByAltText(PROPS.text);
  });

  it('assigns title attribute', () => {
    render(<Avatar {...PROPS} />);
    screen.getByTitle(PROPS.text);
  });

  it('displays letter instead of an image', () => {
    render(<Avatar {...PROPS} letter={LETTER} />);
    screen.getByText(LETTER);
  });
});
