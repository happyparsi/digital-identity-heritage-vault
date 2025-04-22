const { pipeline } = require('@xenova/transformers');

class AutoTaggingService {
  static instance = null;

  static async getInstance() {
    if (this.instance === null) {
      this.instance = await pipeline('text-classification', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english');
    }
    return this.instance;
  }

  static async getTags(text) {
    try {
      const classifier = await this.getInstance();
      const output = await classifier(text);
      
      // Map to our custom tags based on the content
      const customTags = {
        'POSITIVE': ['celebration', 'happy'],
        'NEGATIVE': ['memorial', 'serious']
      };
      
      const tags = customTags[output[0].label] || ['cultural'];
      return tags;
    } catch (error) {
      console.error('Auto-tagging error:', error);
      return ['cultural']; // Default tag
    }
  }
}

// Basic implementation without ML for now
const getTags = async (description) => {
  // Simple keyword extraction
  const keywords = description
    .toLowerCase()
    .split(/\W+/)
    .filter(word => word.length > 3)
    .filter(word => !commonWords.includes(word))
    .slice(0, 5);
  
  return [...new Set(keywords)]; // Remove duplicates
};

const commonWords = [
  'the', 'and', 'that', 'have', 'for', 'not', 'with', 'you', 'this', 'but',
  'from', 'they', 'say', 'her', 'she', 'will', 'one', 'all', 'would', 'there'
];

module.exports = {
  getTags
};

// Export only the AutoTaggingService class
module.exports = AutoTaggingService;