import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const xs = useMediaQuery({ query: "(max-width: 420px)" });
  const sm = useMediaQuery({ query: "(max-width: 720px)" });
  const md = useMediaQuery({ query: "(max-width: 1024px)" });
  const lg = useMediaQuery({ query: "(max-width: 1200px)" });
  const xl = useMediaQuery({ query: "(max-width: 1440px)" });
  const xxl = useMediaQuery({ query: "(max-width: 1920px)" });
  const xxxl = useMediaQuery({ query: "(max-width: 2560px)" });

  return { xs, sm, md, lg, xl, xxl, xxxl };
};
 
export default useResponsive;
