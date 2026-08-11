function Icon({ name, className = "" }) {
  return (
    <img
      src={`/icons/${name}`}
      alt=""
      aria-hidden="true"
      className={`brightness-0 dark:invert ${className}`}
    />
  );
}

export default Icon;