module.exports = {
  createInterface: jest.fn().mockReturnValue({
    question: jest.fn()
    .mockImplementationOnce((_questionTest, cb) => cb('apple'))
    .mockImplementationOnce((_questionTest, cb) => cb('done')),
    close: jest.fn().mockImplementationOnce(() => undefined)
  })
};

