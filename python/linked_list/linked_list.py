class Node:
    def __init__(self, value=None, next=None):
        self.value = value
        self.next = next


class LinkedList:
    """
    Put docstring here
    """

    def __init__(self, node=None):
        self.head = node

    def insert(self, value):

        node = Node(value)

        node.next = self.head
        self.head = node
        return self

    def includes(self, target):

        current = self.head

        while current:
            if current.value == target:
                return True
            current = current.next
        return False

    def __str__(self):

        string = ""

        current = self.head

        while current:
            string += f"{ {current.value} } -> "
            current = current.next

        string += f" None "
        return string


if __name__ == "__main__":
    pass
    # ll1 = LinkedList()
    # ll1.insert("a").insert("b").insert("c").insert("d")
    # result = str(ll1)
    # print(result)
