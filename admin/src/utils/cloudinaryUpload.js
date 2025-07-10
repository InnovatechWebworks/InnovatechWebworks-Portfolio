/**
 * Uploads a file to Cloudinary using an unsigned upload preset.
 * @param {File} file The file to upload.
 * @returns {Promise<string>} A promise that resolves to the secure URL of the uploaded image.
 */
export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'dev_preset'); // Your unsigned upload preset

  const cloudName = 'dvc6mifax';
  const api_url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  try {
    const response = await fetch(api_url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Cloudinary upload failed: ${errorData.error.message}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    // Re-throw the error to be caught by the calling function
    throw error;
  }
};
