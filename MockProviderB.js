class MockProviderB {
  async sendEmail(email) {
    console.log('MockProviderB: Sending email...');
    return Math.random() > 0.5;
  }
}

module.exports = MockProviderB;