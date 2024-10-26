const generateStackViewData = () => {
    return {
      id: new Date().getTime(), 
      title: `Title ${Math.floor(Math.random() * 100)}`, 
      subtitle: `Subtitle ${Math.floor(Math.random() * 100)}`, 
      amount: (Math.random() * 1000).toFixed(2), 
      duration: `${Math.floor(Math.random() * 24)} hours`, 
      isRecommended: Math.random() < 0.5, 
      isExpanded: Math.random() < 0.5, 
    };
  };
  
  // Example usage
  const stackViewData = generateStackViewData();
  console.log(stackViewData);
  