const mapUserToModel = (data) => {
    return {
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      phone: data.phone,
      email: data.email,
      webUrl: data.web,
      imageUrl: data.image.url,
      imageAlt: data.image.alt,
      state: data.address.state,
      country: data.address.country,
      city: data.address.city,
      street: data.address.street,
      houseNumber: data.address.houseNumber,
      zip: data.address.zip,
    };
  };
  
  export default mapUserToModel;
  