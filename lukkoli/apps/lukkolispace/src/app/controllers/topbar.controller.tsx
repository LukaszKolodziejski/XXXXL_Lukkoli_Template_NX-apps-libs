import { Topbar } from '@lukkoli/ui';
import { APP_ROUTES } from '../routing';
import { useLocation } from 'react-router-dom';

export const TopbarController = () => {
  const location = useLocation();

  const title =
    APP_ROUTES.find((item) => item.link === location.pathname)?.title ?? '';

  return (
    <Topbar
      title={title}
      text={title}
      rotating={true}
      shapes={true}
      shadow={true}
      src="https://media.licdn.com/dms/image/C4E03AQHRo8YgyxIqTA/profile-displayphoto-shrink_200_200/0/1634070623836?e=1677715200&v=beta&t=pvm36LTHlghhCQbu4ZtnSJ4iiiLAZ_IZUNNpnM9LG3I"
    />
  );
};
