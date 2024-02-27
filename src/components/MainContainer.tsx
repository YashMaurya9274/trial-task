type Props = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: Props) => {
  return (
    <div className="flex h-screen relative justify-center">{children}</div>
  );
};

export default MainContainer;
