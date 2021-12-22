import reducer from "./reducer";
import { CHANGE_TODO, ADD_TODO, DELETE_TODO } from "./actions";

describe("reducer", () => {
  describe("CHANGE_TODO", () => {
    it("state 'taskTitle' changes", () => {
      const state = reducer({ taskTitle: "" }, CHANGE_TODO("4주차 과제하기"));

      expect(state.taskTitle).toBe("4주차 과제하기");
    });
  });

  describe("ADD_TODO", () => {
    context("with taskTitle", () => {
      it("state 'tasks' is added", () => {
        const state = reducer(
          { newId: 100, taskTitle: "4주차 과제하기", tasks: [] },
          ADD_TODO()
        );

        expect(state.tasks).toHaveLength(1);
        expect(state.taskTitle).toBe("");
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe("4주차 과제하기");
      });
    });

    context("without taskTitle", () => {
      it("state 'tasks' isn't added", () => {
        const state = reducer(
          { newId: 100, taskTitle: "", tasks: [] },
          ADD_TODO()
        );

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe("DELETE_TODO", () => {
    it("state 'tasks' is reduced", () => {
      const state = reducer(
        {
          newId: 100,
          taskTitle: "",
          tasks: [
            {
              id: 100,
              title: "4주차 인강보기",
            },
            {
              id: 101,
              title: "4주차 과제하기",
            },
          ],
        },
        DELETE_TODO(100)
      );

      expect(state.tasks).toHaveLength(1);
    });
  });
});
