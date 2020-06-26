import reducer from "./reducer";

describe("reducer", () => {
  describe("updateTaskTitle", () => {
    it("returns updated taskTitle", () => {

      const state = reudcer({
        taskTitle: ""
      }, {
        type: "updateTaskTitle",
        payload: {
          taskTitle: "새로운 이름"
        }
      });

      expect(state.taskTitle).toBe("새로운 이름");
    });
  });

  describe("addTasks", () => {
    context("with taskTitle", () => {
      it("returns new task in tasks", () => {

        const state = reudcer({
          taskTitle: "새로운 업무",
          tasks: []
        }, {
          type: "addTask"
        });

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].title).toBe("새로운 업무");
      });
    });

    context("without taskTitle", () => {
      it("doesnt work", () => {

        const state = reudcer({
          taskTitle: "",
          tasks: []
        }, {
          type: "addTask"
        });

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe("deleteTask", () => {
    context("with delete task", () => {
      it("returns tasks without deleted task", () => {

        const state = reudcer({
          taskTitle: "새로운 업무",
          tasks: [{
            id: 1,
            title: "너의 첫번째 임무다! #1"
          }, {
            id: 2,
            title: "너의 첫번째 임무다! #2"
          }]
        }, {
          type: "deleteTask",
          payload: {
            id: 1
          }
        });

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).toBe(2);
      });
    });

    context("without delete tasks", () => {
      it("doesnt work", () => {

        const state = reudcer({
          taskTitle: "새로운 업무",
          tasks: [{
            id: 1,
            title: "너의 첫번째 임무다! #1"
          }, {
            id: 2,
            title: "너의 첫번째 임무다! #2"
          }]
        }, {
          type: "deleteTask",
          payload: {
            id: 3
          }
        });

        expect(state.tasks).toHaveLength(2);
        expect(state.tasks[0].id).toBe(1);
      });
    });
  });
});