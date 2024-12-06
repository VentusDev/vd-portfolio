const handleClick = (item, elementsRef, length, down) => {
	const nextIndex = down ? (item + 1 >= length ? 0 : item + 1) : item;
	elementsRef.current[nextIndex].scrollIntoView({ behavior: 'smooth' });
};

export { handleClick };
