import React from "react";
import { PHOTO_GET } from "../Components/api";
import useFetch from "../Hooks/useFetch";
import styles from "./FeedModal.module.css";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import PhotoContent from "./PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />};{data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
