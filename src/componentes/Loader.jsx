import { ColorRing } from  'react-loader-spinner'


const Loader = ({ loading = false }) => {
  return (
    loading && (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Ajusta la altura para centrar verticalmente
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        }}
      >
        <p style={{ fontSize: '24px', color: 'white' }}>Plese wait...</p>
        <ColorRing
          visible={true}
          height={90}
          width={90}
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#0BF5AE', '#0BF5AE', '#0BF5AE', '#0BF5AE', '#0BF5AE']}
        />
      </div>
    )
  );
};

export default Loader