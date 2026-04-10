export default function ModalErreur({ erreur, setErreur }) {
  return (
    <>
      {erreur && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={() => setErreur(null)}
        >
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "2rem",
              maxWidth: "400px",
              width: "90%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h5 className="text-danger mb-3">❌ Erreur</h5>
            <p className="mb-4">{erreur}</p>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-danger"
                onClick={() => setErreur(null)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
