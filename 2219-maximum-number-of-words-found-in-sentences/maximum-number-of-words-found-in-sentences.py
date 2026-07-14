class Solution(object):
    def mostWordsFound(self, sentences):
        """
        :type sentences: List[str]
        :rtype: int
        """
        maximum=0

        for sentence in sentences:
            word = len(sentence.split())
            maximum = max(maximum,word)
        return maximum