# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
According to requirements facility and agent has many to many relation. Assume they have a bridge table which name is assignments.

## Tasks

## 1. Add agent_custom_id in assignments table. 
### Details:
- Add new field agent_custom_id types varchar(100) in Assignments table
- agent_custom_id should be unique and not null.
- Initially set the agent id in it.

### Acceptance Criteria
- Assignments table should have a new agent_custom_id field which type should be varchar(100).
- agent_custom_id should be unique.
- Default agent id should be populated in it.
- Add proper test coverage of new field.
- Test coverage to satisfy complete acceptance criteria.
### Time Estimates
- 2 hour

## 2. For facilities add ability to add agent_custom_id for each Agent they work with. 
### Details:
- Add new `Agent Custom ID` input in assign/edit agent forms. Also add some help text to give some suggestion for proper data in it.
- Update form validation to require `Agent Custom ID` before form submission.
- Update save assignment functionalities to add custom_id in database too.

### Acceptance Criteria
- Assign and edit assignment forms should have an `Agent Custom ID` required input field.
- Assign and edit assignment forms should not be submit without `Agent Custom ID`. 
- Given `Agent Custom ID` should be save if database if it is valid.
- Given `Agent Custom ID` should give the validation error if it is not valid.
- Assign and edit assignment forms should handle validation errors of `Agent Custom ID`.
- Should be able to edit existing `Agent Custom ID`.
- Test coverage to satisfy complete acceptance criteria.

### Time Estimates
- 8 hour

## 3. Modify `getShiftsByFacility` function to add the agent_custom_id in returned metadata. 

### Details:
- Add agent_custom_id field in the returned metadata of agents in the `getShiftsByFacility` function.
- Modify/Add test cases.

### Acceptance Criteria
- `getShiftsByFacility` function should return the agent_custom_id in agents metadata.
- Test cases should be updated. 

### Time Estimates
- 3 hour

## 4. Modify `generateReport` functionality to replace the agent internal database id  with agent_custom_id 

### Details:
- Modify `generateReport` function to replace the agent internal database id with agent_custom_id.
- Modify/Add test cases.

### Acceptance Criteria
- Generated PDF report should have agent_custom_id instead of agent internal database ID.
- Test cases should be updated. 

### Time Estimates
- 4 hour