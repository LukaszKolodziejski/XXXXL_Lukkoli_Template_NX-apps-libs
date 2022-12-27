import { render, screen } from '@testing-library/react';

import { Topbar } from './topbar';

describe('<Topbar>', () => {
  const SRC =
    'https://media.licdn.com/dms/image/C4E03AQHRo8YgyxIqTA/profile-displayphoto-shrink_200_200/0/1634070623836?e=1677715200&v=beta&t=pvm36LTHlghhCQbu4ZtnSJ4iiiLAZ_IZUNNpnM9LG3I';

  it('renders topbar content', () => {
    render(<Topbar title="Title" src={SRC} text="Text" />);

    screen.getByText('Title');
    screen.getByAltText('Text');
  });
});
